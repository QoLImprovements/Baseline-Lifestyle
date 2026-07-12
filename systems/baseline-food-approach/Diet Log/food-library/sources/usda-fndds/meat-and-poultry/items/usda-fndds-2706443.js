/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-chicken-drumstick-with-sauce",
  "description": "Stir-fry and soy-based sauce mixtures",
  "id": "usda-fndds-2706443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-chicken-drumstick-with-sauce",
      "kind": "unit",
      "label": "1 chicken drumstick with sauce"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "1-chicken-wing-with-sauce",
      "kind": "unit",
      "label": "1 chicken wing with sauce"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "1-chicken-leg-with-sauce",
      "kind": "unit",
      "label": "1 chicken leg with sauce"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-chicken-thigh-with-sauce",
      "kind": "unit",
      "label": "1 chicken thigh with sauce"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Orange chicken",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 22.5,
    "energy_kcal": 262.0,
    "fat_g": 12.7,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.94,
    "magnesium_mg": 20.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 130.0,
    "potassium_mg": 209.0,
    "protein_g": 14.5,
    "salt_g": 1.3825,
    "sat_fat_g": 2.42,
    "sodium_mg": 553.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.07,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706443",
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
