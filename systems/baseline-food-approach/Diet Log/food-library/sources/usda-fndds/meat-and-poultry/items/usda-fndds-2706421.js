/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706421",
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
      "gramsPerUnit": 59.0,
      "key": "1-chicken-wing-with-sauce",
      "kind": "unit",
      "label": "1 chicken wing with sauce"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-chicken-drumstick-with-sauce",
      "kind": "unit",
      "label": "1 chicken drumstick with sauce"
    },
    {
      "gramsPerUnit": 197.0,
      "key": "1-chicken-leg-with-sauce",
      "kind": "unit",
      "label": "1 chicken leg with sauce"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-slice-of-turkey-with-sauce",
      "kind": "unit",
      "label": "1 slice of turkey with sauce"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "1-chicken-thigh-with-sauce",
      "kind": "unit",
      "label": "1 chicken thigh with sauce"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-slice-of-chicken-with-sauce",
      "kind": "unit",
      "label": "1 slice of chicken with sauce"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 169.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    }
  ],
  "name": "Chicken or turkey cacciatore",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.92,
    "energy_kcal": 174.0,
    "fat_g": 10.6,
    "fibre_g": 1.1,
    "folate_ug": 16.0,
    "iron_mg": 1.02,
    "magnesium_mg": 21.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 138.0,
    "potassium_mg": 290.0,
    "protein_g": 13.2,
    "salt_g": 1.66,
    "sat_fat_g": 2.57,
    "sodium_mg": 664.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 5.4,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706421",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
