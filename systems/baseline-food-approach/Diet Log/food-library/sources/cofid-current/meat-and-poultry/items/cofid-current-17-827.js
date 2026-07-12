/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-827",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, pasta, white, with ham and mushrooms, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 1.0,
    "energy_kcal": 129.0,
    "fat_g": 10.6,
    "fibre_g": 0.4,
    "folate_ug": 16.0,
    "iron_mg": 0.29,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 182.0,
    "potassium_mg": 291.0,
    "protein_g": 7.3,
    "salt_g": 0.495,
    "sat_fat_g": 6.6,
    "sodium_mg": 198.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 152.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-827",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
