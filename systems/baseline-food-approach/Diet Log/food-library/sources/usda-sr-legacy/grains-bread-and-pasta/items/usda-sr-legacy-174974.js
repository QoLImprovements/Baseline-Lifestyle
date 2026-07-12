/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "8-wafers-mini-wafers",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.6,
      "key": "8-wafers-mini-wafers",
      "kind": "unit",
      "label": "8 wafers mini wafers"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "8-wafers",
      "kind": "unit",
      "label": "8 wafers"
    }
  ],
  "name": "Cookies, vanilla wafers, higher fat",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 72.6,
    "energy_kcal": 1900.0,
    "fat_g": 16.4,
    "fibre_g": 1.6,
    "folate_ug": 83.0,
    "iron_mg": 2.79,
    "magnesium_mg": 12.0,
    "omega3_g": 0.718,
    "phosphorus_mg": 88.0,
    "potassium_mg": 99.0,
    "protein_g": 4.9,
    "salt_g": 0.8125,
    "sat_fat_g": 4.24,
    "sodium_mg": 325.0,
    "sugar_g": 35.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.27,
    "vitamin_k_ug": 29.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174974",
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
