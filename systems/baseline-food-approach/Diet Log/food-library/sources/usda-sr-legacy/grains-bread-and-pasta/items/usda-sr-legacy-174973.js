/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "medium",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "cup-crumbs",
      "kind": "unit",
      "label": "cup, crumbs"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, vanilla wafers, lower fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 73.6,
    "energy_kcal": 1840.0,
    "fat_g": 15.2,
    "fibre_g": 1.9,
    "folate_ug": 60.0,
    "iron_mg": 2.38,
    "magnesium_mg": 14.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 104.0,
    "potassium_mg": 97.0,
    "protein_g": 5.0,
    "salt_g": 0.97,
    "sat_fat_g": 3.84,
    "sodium_mg": 388.0,
    "sugar_g": 37.5,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174973",
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
