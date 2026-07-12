/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2707705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-gerber-zwieback-toast",
      "kind": "unit",
      "label": "1 Gerber Zwieback toast"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-rusk",
      "kind": "unit",
      "label": "1 rusk"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    }
  ],
  "name": "Zwieback toast",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 74.2,
    "energy_kcal": 426.0,
    "fat_g": 9.7,
    "fibre_g": 2.5,
    "folate_ug": 87.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 305.0,
    "protein_g": 10.1,
    "salt_g": 0.5675,
    "sat_fat_g": 2.52,
    "sodium_mg": 227.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707705",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
