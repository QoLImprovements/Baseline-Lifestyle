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
  "id": "usda-fndds-2706404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-sauce",
      "kind": "unit",
      "label": "1 slice with sauce"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "1-pork-chop-with-sauce",
      "kind": "unit",
      "label": "1 pork chop with sauce"
    }
  ],
  "name": "Ham or pork with tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 1.59,
    "energy_kcal": 153.0,
    "fat_g": 6.8,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 1.05,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 182.0,
    "potassium_mg": 385.0,
    "protein_g": 20.3,
    "salt_g": 0.88,
    "sat_fat_g": 2.46,
    "sodium_mg": 352.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706404",
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
