import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import ReactTagAutocomplete from 'react-tag-autocomplete';

const ResumeBuilder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
    const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
    const [skills, setSkills] = useState([]);
    const [newEducation, setNewEducation] = useState({ institute: '', year: '', degree: '' });
    const [newExperience, setNewExperience] = useState({ company: '', year: '', designation: '' });
    const [newSkill, setNewSkill] = useState('');
    const [tags, setTags] = useState([]);
    const [suggestions, setSuggestions] = useState([
      'PHP', 'JavaScript', 'Python', 'Java', 'C++'
    ]);
  const [inputValue, setInputValue] = useState('');

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };

      const addEducation = () => {
        setEducation([...education, newEducation]);
        setNewEducation({ institute: '', year: '', degree: '' });
      };

      const addExperience = () => {
        setExperience([...experience, newExperience]);
        setNewExperience({ company: '', year: '', designation: '' });
      };

  const addSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill !== '') {
      setSkills([...skills, trimmedSkill]);
      setNewSkill('');
    }
  };

  const deleteEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const deleteExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
          const formData = {
            name,
            email,
            address,
            phone,
            education,
            experience,
            skills
          };

    setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setEducation([{ institute: '', year: '', degree: '' }]);
      setExperience([{ company: '', year: '', designation: '' }]);
      setSkills([]);
  };

      const handleInputChange = (input) => {
        setInputValue(input);
      };

      const handleInputFocus = () => {
        setSuggestions(['PHP', 'JavaScript', 'Python', 'Java', 'C++']);
      };

      const handleInputBlur = () => {
        setSuggestions([]);
      };

  const handleTagClick = (index) => {
    handleDelete(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Resume Builder</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Personal Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Education</Text>

        {education.map((edu, index) => (
          <View style={styles.educationItem} key={index}>
            <TextInput
              style={styles.input}
              placeholder="Institute"
              value={edu.institute}
              onChangeText={(text) => {
                const updatedEducation = [...education];
                updatedEducation[index].institute = text;
                setEducation(updatedEducation);
              }}
            />

              <TextInput
                style={styles.input}
                placeholder="Year"
                value={edu.year}
                onChangeText={(text) => {
                  const updatedEducation = [...education];
                  updatedEducation[index].year = text;
                  setEducation(updatedEducation);
                }}
              />

                <TextInput
                  style={styles.input}
                  placeholder="Degree"
                  value={edu.degree}
                  onChangeText={(text) => {
                    const updatedEducation = [...education];
                    updatedEducation[index].degree = text;
                    setEducation(updatedEducation);
                  }}
              />

            <Button
              title="x"
              onPress={() => deleteEducation(index)}
              color="#FF0000"
              accessibilityLabel="Remove education"
            />
          </View>
        ))}

        <Button title="Add Education" onPress={addEducation} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Experience</Text>

        {experience.map((exp, index) => (
          <View style={styles.experienceItem} key={index}>
            <TextInput
              style={styles.input}
              placeholder="Company"
              value={exp.company}
              onChangeText={(text) => {
                const updatedExperience = [...experience];
                updatedExperience[index].company = text;
                setExperience(updatedExperience);
              }}
            />

                <TextInput
                  style={styles.input}
                  placeholder="Year"
                  value={exp.year}
                  onChangeText={(text) => {
                    const updatedExperience = [...experience];
                    updatedExperience[index].year = text;
                    setExperience(updatedExperience);
                  }}
                />

              <TextInput
                style={styles.input}
                placeholder="Designation"
                value={exp.designation}
                onChangeText={(text) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].designation = text;
                  setExperience(updatedExperience);
                }}
              />

            <Button
              title="x"
              onPress={() => deleteExperience(index)}
              color="#FF0000"
              accessibilityLabel="Remove experience"
            />
          </View>
        ))}

        <Button title="Add Experience" onPress={addExperience} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Skills</Text>

          <ReactTagAutocomplete
            tags={tags}
            suggestions={suggestions}
            handleAddition={handleAddition}
            handleDelete={handleDelete}
            handleInputChange={handleInputChange}
            handleInputFocus={handleInputFocus}
            handleInputBlur={handleInputBlur}
            handleTagClick={handleTagClick}
            inputValue={inputValue}
          />

        <View style={styles.skillList}>
          {skills.map((skill, index) => (
            <View style={styles.skillItem} key={index}>
              <Text style={styles.skillText}>{skill}</Text>
              <Button
                title="x"
                onPress={() => {
                  const updatedSkills = [...skills];
                  updatedSkills.splice(index, 1);
                  setSkills(updatedSkills);
                }}
                color="#FF0000"
                accessibilityLabel="Remove skill"
              />
            </View>
          ))}
        </View>

        <TextInput
            style={styles.input}
            placeholder="Add Skill"
            value={newSkill}
            onChangeText={(text) => setNewSkill(text)}
          />

          <Button title="Add" onPress={addSkill} />
        </View>

        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  };

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    sectionContainer: {
      marginBottom: 20,
    },
    sectionHeading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  educationItem: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
      experienceItem: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      skillList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
      },
  skillItem: {
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillText: {
    marginRight: 5,
  },
});

export default ResumeBuilder;
