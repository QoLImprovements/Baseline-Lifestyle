/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, including beef and onion",
  "id": "cofid-current-18-506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, beef, puff or shortcrust pastry, individual, retail",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 25.5,
    "energy_kcal": 292.0,
    "fat_g": 17.7,
    "fibre_g": 2.1,
    "folate_ug": 2.0,
    "iron_mg": 1.17,
    "magnesium_mg": 15.0,
    "omega3_g": 0.21,
    "phosphorus_mg": 83.0,
    "potassium_mg": 163.0,
    "protein_g": 9.2,
    "salt_g": 0.865,
    "sat_fat_g": 7.9,
    "sodium_mg": 346.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-506",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
