/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, including broccoli, tomato, spinach, roasted vegetables, asparagus and vegetable and cheese",
  "id": "cofid-current-12-949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Quiche, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 21.2,
    "energy_kcal": 289.0,
    "fat_g": 19.7,
    "fibre_g": 2.8,
    "folate_ug": 15.0,
    "iron_mg": 0.94,
    "magnesium_mg": 19.0,
    "omega3_g": 0.56,
    "phosphorus_mg": 151.0,
    "potassium_mg": 183.0,
    "protein_g": 8.1,
    "salt_g": 0.5,
    "sat_fat_g": 8.34,
    "sodium_mg": 200.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-949",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
