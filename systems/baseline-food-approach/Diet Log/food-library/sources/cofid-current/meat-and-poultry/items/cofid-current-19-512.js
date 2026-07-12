/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "16 samples",
  "id": "cofid-current-19-512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, pork, chilled, fried in vegetable oil",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 9.9,
    "energy_kcal": 308.0,
    "fat_g": 23.9,
    "fibre_g": 2.1,
    "folate_ug": 3.0,
    "iron_mg": 1.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.33,
    "phosphorus_mg": 220.0,
    "potassium_mg": 180.0,
    "protein_g": 13.9,
    "salt_g": 1.6,
    "sat_fat_g": 8.5,
    "sodium_mg": 640.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-512",
  "state": "Fried",
  "subcategory": "MI",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
