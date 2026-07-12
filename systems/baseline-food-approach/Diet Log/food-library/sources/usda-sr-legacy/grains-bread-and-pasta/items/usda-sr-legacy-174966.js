/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174966",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, raisin, soft-type",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 68.0,
    "energy_kcal": 1680.0,
    "fat_g": 13.6,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 2.29,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 83.0,
    "potassium_mg": 140.0,
    "protein_g": 4.1,
    "salt_g": 1.045,
    "sat_fat_g": 3.46,
    "sodium_mg": 418.0,
    "sugar_g": 47.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174966",
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
