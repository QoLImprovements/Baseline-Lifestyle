/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-current-19-128",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corned beef, canned",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 1.0,
    "energy_kcal": 205.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 2.4,
    "magnesium_mg": 15.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 130.0,
    "potassium_mg": 140.0,
    "protein_g": 25.9,
    "salt_g": 2.15,
    "sat_fat_g": 5.7,
    "sodium_mg": 860.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 2.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-128",
  "state": "Canned",
  "subcategory": "MI",
  "tags": [
    "canned",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
