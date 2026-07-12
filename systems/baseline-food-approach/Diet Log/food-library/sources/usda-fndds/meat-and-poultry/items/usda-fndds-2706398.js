/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-with-gravy",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706398",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-gravy",
      "kind": "unit",
      "label": "1 slice with gravy"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "1-pork-chop-with-gravy",
      "kind": "unit",
      "label": "1 pork chop with gravy"
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
    }
  ],
  "name": "Ham or pork with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 1.58,
    "energy_kcal": 160.0,
    "fat_g": 7.49,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.79,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 179.0,
    "potassium_mg": 309.0,
    "protein_g": 20.2,
    "salt_g": 0.8725,
    "sat_fat_g": 2.64,
    "sodium_mg": 349.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706398",
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
