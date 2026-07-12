/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey and rice with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 8.01,
    "energy_kcal": 162.0,
    "fat_g": 9.21,
    "fibre_g": 0.5,
    "folate_ug": 20.0,
    "iron_mg": 0.74,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 186.0,
    "protein_g": 12.0,
    "salt_g": 0.9875,
    "sat_fat_g": 1.53,
    "sodium_mg": 395.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 18.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706542",
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
