/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Including Kit Kat, Blue Riband, Time Out and Taxi",
  "id": "cofid-current-11-812",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate covered wafer biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 167.0,
    "carbs_g": 61.1,
    "energy_kcal": 509.0,
    "fat_g": 28.6,
    "fibre_g": 2.7,
    "folate_ug": 11.0,
    "iron_mg": 2.37,
    "magnesium_mg": 41.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 151.0,
    "potassium_mg": 340.0,
    "protein_g": 5.5,
    "salt_g": 0.225,
    "sat_fat_g": 17.5,
    "sodium_mg": 90.0,
    "sugar_g": 45.1,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-812",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
