/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stuffing, sage and onion, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 29.4,
    "energy_kcal": 253.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.09,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 173.0,
    "protein_g": 5.6,
    "salt_g": 0.6575,
    "sat_fat_g": 4.15,
    "sodium_mg": 263.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1000",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
