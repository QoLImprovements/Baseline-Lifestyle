/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pudding, suet, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 46.4,
    "energy_kcal": 352.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.79,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 187.0,
    "potassium_mg": 118.0,
    "protein_g": 4.8,
    "salt_g": 0.615,
    "sat_fat_g": 9.88,
    "sodium_mg": 246.0,
    "sugar_g": 14.5,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1124",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
