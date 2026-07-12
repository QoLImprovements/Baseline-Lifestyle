/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2707457",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soup, bean, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 10.0,
    "energy_kcal": 84.0,
    "fat_g": 2.35,
    "fibre_g": 3.5,
    "folate_ug": 58.0,
    "iron_mg": 1.01,
    "magnesium_mg": 29.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 75.0,
    "potassium_mg": 199.0,
    "protein_g": 5.88,
    "salt_g": 0.62,
    "sat_fat_g": 0.756,
    "sodium_mg": 248.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707457",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "meat-and-poultry",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
