/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-slice-with-sauce",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706403",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-with-sauce",
      "kind": "unit",
      "label": "1 slice with sauce"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-pork-chop-with-sauce",
      "kind": "unit",
      "label": "1 pork chop with sauce"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ham or pork with mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 1.84,
    "energy_kcal": 167.0,
    "fat_g": 7.98,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.8,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 189.0,
    "potassium_mg": 324.0,
    "protein_g": 20.6,
    "salt_g": 0.8775,
    "sat_fat_g": 2.76,
    "sodium_mg": 351.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706403",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
