/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Archway Home Style Cookies, Molasses",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 69.4,
    "energy_kcal": 403.0,
    "fat_g": 12.1,
    "fibre_g": 1.2,
    "folate_ug": 69.0,
    "iron_mg": 4.68,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 117.0,
    "protein_g": 4.25,
    "salt_g": 1.4425,
    "sat_fat_g": 2.81,
    "sodium_mg": 577.0,
    "sugar_g": 36.4,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175073",
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
