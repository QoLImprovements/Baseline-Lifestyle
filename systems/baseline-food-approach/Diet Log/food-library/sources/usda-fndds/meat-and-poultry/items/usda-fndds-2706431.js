/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-of-turkey-with-sauce",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706431",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-slice-of-turkey-with-sauce",
      "kind": "unit",
      "label": "1 slice of turkey with sauce"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-chicken-leg-with-sauce",
      "kind": "unit",
      "label": "1 chicken leg with sauce"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-chicken-drumstick-with-sauce",
      "kind": "unit",
      "label": "1 chicken drumstick with sauce"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-chicken-thigh-with-sauce",
      "kind": "unit",
      "label": "1 chicken thigh with sauce"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-slice-of-chicken-with-sauce",
      "kind": "unit",
      "label": "1 slice of chicken with sauce"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-chicken-wing-with-sauce",
      "kind": "unit",
      "label": "1 chicken wing with sauce"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey with cream sauce",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 2.75,
    "energy_kcal": 157.0,
    "fat_g": 7.48,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.61,
    "magnesium_mg": 20.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 197.0,
    "potassium_mg": 241.0,
    "protein_g": 19.8,
    "salt_g": 1.275,
    "sat_fat_g": 2.5,
    "sodium_mg": 510.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706431",
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
