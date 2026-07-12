/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1094",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muffins, American style, chocolate chip, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 53.6,
    "energy_kcal": 384.0,
    "fat_g": 17.5,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 1.34,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 261.0,
    "potassium_mg": 192.0,
    "protein_g": 6.3,
    "salt_g": 0.6575,
    "sat_fat_g": 10.37,
    "sodium_mg": 263.0,
    "sugar_g": 28.2,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1094",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
