/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "package-little-debbie-twin-wrapped",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "package-little-debbie-twin-wrapped",
      "kind": "unit",
      "label": "package, Little Debbie (twin wrapped)"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "square-large-2-3-4-sq-x-7-8",
      "kind": "unit",
      "label": "square, large (2-3/4\" sq x 7/8\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, brownies, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 63.9,
    "energy_kcal": 1700.0,
    "fat_g": 16.3,
    "fibre_g": 2.1,
    "folate_ug": 47.0,
    "iron_mg": 2.25,
    "magnesium_mg": 31.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 101.0,
    "potassium_mg": 149.0,
    "protein_g": 4.8,
    "salt_g": 0.715,
    "sat_fat_g": 4.24,
    "sodium_mg": 286.0,
    "sugar_g": 36.6,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172713",
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
