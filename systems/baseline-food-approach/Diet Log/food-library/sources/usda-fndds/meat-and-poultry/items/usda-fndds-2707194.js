/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2707194",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    }
  ],
  "name": "Chicken egg foo yung",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 4.78,
    "energy_kcal": 137.0,
    "fat_g": 7.38,
    "fibre_g": 0.3,
    "folate_ug": 31.0,
    "iron_mg": 1.11,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 149.0,
    "potassium_mg": 172.0,
    "protein_g": 12.8,
    "salt_g": 1.0025,
    "sat_fat_g": 1.99,
    "sodium_mg": 401.0,
    "sugar_g": 3.05,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 23.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707194",
  "state": "Unspecified",
  "subcategory": "Stir-fry and soy-based sauce mixtures",
  "tags": [
    "meat-and-poultry",
    "stir-fry-and-soy-based-sauce-mixtures",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
