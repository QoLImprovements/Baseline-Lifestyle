/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Analysis and literature sources",
  "id": "cofid-current-14-277",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon juice, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.6,
    "energy_kcal": 7.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 130.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 36.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-277",
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
