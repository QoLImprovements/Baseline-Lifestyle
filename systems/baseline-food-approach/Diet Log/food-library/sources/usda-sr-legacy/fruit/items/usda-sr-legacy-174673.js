/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-sections-with-juice",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174673",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-sections-with-juice",
      "kind": "unit",
      "label": "cup sections, with juice"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-fruit-3-3-4-dia",
      "kind": "unit",
      "label": "0.5 fruit (3-3/4\" dia)"
    }
  ],
  "name": "Grapefruit, raw, pink and red, all areas",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 10.7,
    "energy_kcal": 42.0,
    "fat_g": 0.14,
    "fibre_g": 1.6,
    "folate_ug": 13.0,
    "iron_mg": 0.08,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 135.0,
    "protein_g": 0.77,
    "salt_g": 0.0,
    "sat_fat_g": 0.021,
    "sodium_mg": 0.0,
    "sugar_g": 6.89,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 31.2,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174673",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
