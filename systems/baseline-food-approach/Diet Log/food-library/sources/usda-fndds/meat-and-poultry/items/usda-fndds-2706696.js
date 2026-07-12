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
  "id": "usda-fndds-2706696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; soy-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.79,
    "energy_kcal": 133.0,
    "fat_g": 7.15,
    "fibre_g": 0.9,
    "folate_ug": 21.0,
    "iron_mg": 0.69,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 208.0,
    "protein_g": 9.64,
    "salt_g": 0.7625,
    "sat_fat_g": 1.19,
    "sodium_mg": 305.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 11.4,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 18.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706696",
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
