/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-chicken-wing-with-sauce",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706432",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-chicken-wing-with-sauce",
      "kind": "unit",
      "label": "1 chicken wing with sauce"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-slice-of-chicken-with-sauce",
      "kind": "unit",
      "label": "1 slice of chicken with sauce"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-chicken-leg-with-sauce",
      "kind": "unit",
      "label": "1 chicken leg with sauce"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "1-2-chicken-breast-with-sauce",
      "kind": "unit",
      "label": "1/2 chicken breast with sauce"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 256.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-slice-of-turkey-with-sauce",
      "kind": "unit",
      "label": "1 slice of turkey with sauce"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "1-chicken-thigh-with-sauce",
      "kind": "unit",
      "label": "1 chicken thigh with sauce"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-chicken-drumstick-with-sauce",
      "kind": "unit",
      "label": "1 chicken drumstick with sauce"
    }
  ],
  "name": "Chicken or turkey with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 1.84,
    "energy_kcal": 136.0,
    "fat_g": 5.7,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.55,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 223.0,
    "protein_g": 19.3,
    "salt_g": 1.3025,
    "sat_fat_g": 1.42,
    "sodium_mg": 521.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706432",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "fungi",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
