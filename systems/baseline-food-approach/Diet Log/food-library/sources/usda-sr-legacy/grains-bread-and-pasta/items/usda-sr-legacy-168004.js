/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-crackers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168004",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.4,
      "key": "3-crackers",
      "kind": "unit",
      "label": "3 crackers"
    }
  ],
  "name": "Mary's Gone Crackers, Original Crackers, Organic Gluten Free",
  "nutritionPerBasis": {
    "calcium_mg": 223.0,
    "carbs_g": 64.3,
    "energy_kcal": 446.0,
    "fat_g": 15.6,
    "fibre_g": 16.2,
    "folate_ug": 0.0,
    "iron_mg": 3.17,
    "magnesium_mg": 198.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 422.0,
    "potassium_mg": 477.0,
    "protein_g": 12.1,
    "salt_g": 1.4675,
    "sat_fat_g": 0.0,
    "sodium_mg": 587.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168004",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
