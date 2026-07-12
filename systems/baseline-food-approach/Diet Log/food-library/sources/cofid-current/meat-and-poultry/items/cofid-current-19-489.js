/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples of thick sausages, chilled. Approx 60-81% meat",
  "id": "cofid-current-19-489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sausages, beef, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 11.0,
    "energy_kcal": 265.0,
    "fat_g": 17.2,
    "fibre_g": 1.6,
    "folate_ug": 9.0,
    "iron_mg": 1.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 259.0,
    "potassium_mg": 246.0,
    "protein_g": 17.2,
    "salt_g": 1.25,
    "sat_fat_g": 7.9,
    "sodium_mg": 500.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-489",
  "state": "Grilled",
  "subcategory": "MI",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "mi"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
