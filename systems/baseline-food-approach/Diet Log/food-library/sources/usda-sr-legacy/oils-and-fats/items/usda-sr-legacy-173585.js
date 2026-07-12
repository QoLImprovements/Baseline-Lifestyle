/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-173585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "stick",
      "kind": "unit",
      "label": "stick"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "pat-1-sq-1-3-high",
      "kind": "unit",
      "label": "pat (1\" sq, 1/3\" high)"
    },
    {
      "gramsPerUnit": 227.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Margarine, regular, 80% fat, composite, stick, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.7,
    "energy_kcal": 717.0,
    "fat_g": 80.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.06,
    "magnesium_mg": 3.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 5.0,
    "potassium_mg": 18.0,
    "protein_g": 0.16,
    "salt_g": 0.005,
    "sat_fat_g": 15.2,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 9.0,
    "vitamin_k_ug": 93.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173585",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
