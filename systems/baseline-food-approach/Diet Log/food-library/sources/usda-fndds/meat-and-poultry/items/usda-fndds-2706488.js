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
  "id": "usda-fndds-2706488",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef and noodles with soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 7.54,
    "energy_kcal": 173.0,
    "fat_g": 10.0,
    "fibre_g": 0.6,
    "folate_ug": 10.0,
    "iron_mg": 1.25,
    "magnesium_mg": 15.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 97.0,
    "potassium_mg": 172.0,
    "protein_g": 13.2,
    "salt_g": 0.6825,
    "sat_fat_g": 2.22,
    "sodium_mg": 273.0,
    "sugar_g": 0.86,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706488",
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
