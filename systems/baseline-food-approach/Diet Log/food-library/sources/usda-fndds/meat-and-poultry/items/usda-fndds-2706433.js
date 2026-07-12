/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-chicken-leg-with-sauce",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706433",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-chicken-leg-with-sauce",
      "kind": "unit",
      "label": "1 chicken leg with sauce"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-chicken-drumstick-with-sauce",
      "kind": "unit",
      "label": "1 chicken drumstick with sauce"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-chicken-wing-with-sauce",
      "kind": "unit",
      "label": "1 chicken wing with sauce"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "1-chicken-thigh-with-sauce",
      "kind": "unit",
      "label": "1 chicken thigh with sauce"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Chicken or turkey with teriyaki",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.62,
    "energy_kcal": 163.0,
    "fat_g": 5.96,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.86,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 239.0,
    "potassium_mg": 285.0,
    "protein_g": 25.7,
    "salt_g": 1.8075,
    "sat_fat_g": 1.48,
    "sodium_mg": 723.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706433",
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
