/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-meatball-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-meatball-with-sauce",
      "kind": "unit",
      "label": "1 meatball with sauce"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Meatballs, with breading, NS as to type of meat, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 6.28,
    "energy_kcal": 143.0,
    "fat_g": 7.51,
    "fibre_g": 0.4,
    "folate_ug": 13.0,
    "iron_mg": 1.53,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 199.0,
    "protein_g": 12.2,
    "salt_g": 1.2475,
    "sat_fat_g": 2.88,
    "sodium_mg": 499.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706580",
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
