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
  "id": "cofid-current-12-953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, Lorraine, wholemeal pastry, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 206.0,
    "carbs_g": 18.0,
    "energy_kcal": 354.0,
    "fat_g": 24.9,
    "fibre_g": 2.3,
    "folate_ug": 15.0,
    "iron_mg": 1.1,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 272.0,
    "potassium_mg": 255.0,
    "protein_g": 15.8,
    "salt_g": 1.4675,
    "sat_fat_g": 13.37,
    "sodium_mg": 587.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-953",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
