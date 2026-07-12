/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "8 samples, 4 brands including milk chocolate and caramel and white chocolate dessert pots, chilled",
  "id": "cofid-current-12-398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Desserts, dairy, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 26.7,
    "energy_kcal": 214.0,
    "fat_g": 10.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.44,
    "magnesium_mg": 20.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 125.0,
    "potassium_mg": 195.0,
    "protein_g": 4.3,
    "salt_g": 0.185,
    "sat_fat_g": 6.26,
    "sodium_mg": 74.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-398",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
