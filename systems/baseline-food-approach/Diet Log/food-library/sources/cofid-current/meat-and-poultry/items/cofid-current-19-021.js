/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples; smoked and unsmoked, prepacked British and Danish gammon",
  "id": "cofid-current-19-021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ham, gammon joint, boiled",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 204.0,
    "fat_g": 12.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.8,
    "magnesium_mg": 18.0,
    "omega3_g": 0.26,
    "phosphorus_mg": 170.0,
    "potassium_mg": 250.0,
    "protein_g": 23.3,
    "salt_g": 2.95,
    "sat_fat_g": 4.11,
    "sodium_mg": 1180.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-021",
  "state": "Boiled",
  "subcategory": "MAA",
  "tags": [
    "boiled",
    "maa",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
