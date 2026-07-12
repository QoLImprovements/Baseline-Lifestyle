/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Ramen and Asian broth-based soups",
  "id": "usda-fndds-2707125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soup, pho, no meat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 5.9,
    "energy_kcal": 37.0,
    "fat_g": 0.93,
    "fibre_g": 0.5,
    "folate_ug": 15.0,
    "iron_mg": 0.27,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 53.0,
    "protein_g": 1.42,
    "salt_g": 0.8925,
    "sat_fat_g": 0.13,
    "sodium_mg": 357.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707125",
  "state": "Unspecified",
  "subcategory": "Ramen and Asian broth-based soups",
  "tags": [
    "meat-and-poultry",
    "ramen-and-asian-broth-based-soups",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
