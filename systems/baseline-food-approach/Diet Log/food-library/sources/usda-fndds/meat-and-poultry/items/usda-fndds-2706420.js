/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch-boneless-cooked",
      "kind": "unit",
      "label": "1 cubic inch, boneless, cooked"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-gravy",
      "kind": "unit",
      "label": "1 slice with gravy"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Venison or deer with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.58,
    "energy_kcal": 147.0,
    "fat_g": 3.53,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.52,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 231.0,
    "protein_g": 25.5,
    "salt_g": 0.8625,
    "sat_fat_g": 1.75,
    "sodium_mg": 345.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706420",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
