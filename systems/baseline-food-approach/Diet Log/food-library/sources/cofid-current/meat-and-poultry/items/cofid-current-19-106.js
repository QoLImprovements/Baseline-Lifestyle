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
  "id": "cofid-current-19-106",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liver sausage",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 6.0,
    "energy_kcal": 226.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 6.0,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 180.0,
    "protein_g": 13.4,
    "salt_g": 2.025,
    "sat_fat_g": 5.3,
    "sodium_mg": 810.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 2600.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-106",
  "state": "Unspecified",
  "subcategory": "MI",
  "tags": [
    "meat-and-poultry",
    "mi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
