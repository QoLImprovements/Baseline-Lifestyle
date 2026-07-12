/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "18 samples, cartons only",
  "id": "cofid-current-14-286",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pineapple juice, unsweetened",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 10.5,
    "energy_kcal": 41.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 53.0,
    "protein_g": 0.3,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-286",
  "state": "Unspecified",
  "subcategory": "PE",
  "tags": [
    "beverages",
    "pe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
