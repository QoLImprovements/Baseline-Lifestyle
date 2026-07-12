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
  "id": "usda-sr-legacy-174950",
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
      "gramsPerUnit": 5.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, butter, commercially prepared, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 68.9,
    "energy_kcal": 1950.0,
    "fat_g": 18.8,
    "fibre_g": 0.8,
    "folate_ug": 76.0,
    "iron_mg": 2.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 102.0,
    "potassium_mg": 111.0,
    "protein_g": 6.1,
    "salt_g": 0.705,
    "sat_fat_g": 11.1,
    "sodium_mg": 282.0,
    "sugar_g": 20.2,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174950",
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
