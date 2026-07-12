/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "20 samples, 9 brands; mixed plain and flavoured e.g. chipsticks, crunchy sticks",
  "id": "cofid-old-17-140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato and corn sticks",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 60.4,
    "energy_kcal": 462.0,
    "fat_g": 23.6,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 1.2,
    "magnesium_mg": 37.0,
    "omega3_g": 0.74,
    "phosphorus_mg": 120.0,
    "potassium_mg": 840.0,
    "protein_g": 5.8,
    "salt_g": 2.725,
    "sat_fat_g": 6.6,
    "sodium_mg": 1090.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-140",
  "state": "Unspecified",
  "subcategory": "SNB",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "snb",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
