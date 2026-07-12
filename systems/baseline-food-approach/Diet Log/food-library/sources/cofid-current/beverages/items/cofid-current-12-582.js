/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream with wafers, non-dairy, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 31.7,
    "energy_kcal": 199.0,
    "fat_g": 7.5,
    "fibre_g": 0.3,
    "folate_ug": 8.0,
    "iron_mg": 0.42,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 179.0,
    "protein_g": 2.9,
    "salt_g": 0.2,
    "sat_fat_g": 4.84,
    "sodium_mg": 80.0,
    "sugar_g": 22.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-582",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "beverages",
    "bp",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
