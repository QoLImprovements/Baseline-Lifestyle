/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "muffin",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173238",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "English muffins, plain, unenriched, without calcium propionate (includes sourdough)",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 46.0,
    "energy_kcal": 983.0,
    "fat_g": 1.8,
    "fibre_g": 2.7,
    "folate_ug": 37.0,
    "iron_mg": 0.89,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 131.0,
    "protein_g": 7.7,
    "salt_g": 1.16,
    "sat_fat_g": 0.259,
    "sodium_mg": 464.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173238",
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
