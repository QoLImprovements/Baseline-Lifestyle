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
  "id": "usda-sr-legacy-174960",
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
      "gramsPerUnit": 496.0,
      "key": "package-17-5-oz",
      "kind": "unit",
      "label": "package (17.5 oz)"
    }
  ],
  "name": "Cookies, oatmeal, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 67.3,
    "energy_kcal": 1930.0,
    "fat_g": 19.2,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 2.22,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 183.0,
    "protein_g": 6.5,
    "salt_g": 1.1825,
    "sat_fat_g": 4.76,
    "sodium_mg": 473.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174960",
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
