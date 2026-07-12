/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples from chinese takeaways, seasoned roasted duck",
  "id": "cofid-current-18-490",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Duck, crispy, chinese style, meat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.3,
    "energy_kcal": 331.0,
    "fat_g": 24.2,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 3.98,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 257.0,
    "potassium_mg": 292.0,
    "protein_g": 27.9,
    "salt_g": 1.1325,
    "sat_fat_g": 7.2,
    "sodium_mg": 453.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-490",
  "state": "Unspecified",
  "subcategory": "MCC",
  "tags": [
    "mcc",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
