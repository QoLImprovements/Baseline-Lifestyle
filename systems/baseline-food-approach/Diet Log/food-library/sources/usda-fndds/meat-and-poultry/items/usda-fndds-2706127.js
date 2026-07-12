/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-medium-neck-from-14-to-18-lb-turkey",
      "kind": "unit",
      "label": "1 medium neck (from 14 to 18 lb turkey)"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-diced-cooked",
      "kind": "unit",
      "label": "1 cup, diced, cooked"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-small-neck-from-11-to-13-lb-turkey",
      "kind": "unit",
      "label": "1 small neck (from 11 to 13 lb turkey)"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "1-large-neck-from-19-to-21-lb-turkey",
      "kind": "unit",
      "label": "1 large neck (from 19 to 21 lb turkey)"
    }
  ],
  "name": "Turkey, neck",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 0.0,
    "energy_kcal": 161.0,
    "fat_g": 7.3,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.17,
    "magnesium_mg": 18.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 180.0,
    "potassium_mg": 113.0,
    "protein_g": 22.3,
    "salt_g": 1.415,
    "sat_fat_g": 2.2,
    "sodium_mg": 566.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706127",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
