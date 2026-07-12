/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "20 eggs from 7 different Chinese shops",
  "id": "cofid-current-12-814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, duck, boiled and salted",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 0.0,
    "energy_kcal": 198.0,
    "fat_g": 15.5,
    "fibre_g": 0.0,
    "folate_ug": 28.0,
    "iron_mg": 3.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 800.0,
    "protein_g": 14.6,
    "salt_g": 4.225,
    "sat_fat_g": 3.8,
    "sodium_mg": 1690.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-814",
  "state": "Boiled",
  "subcategory": "CA",
  "tags": [
    "boiled",
    "ca",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
