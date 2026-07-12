/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "jar-nfs",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173517",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-second-food-4-oz",
      "kind": "unit",
      "label": "jar Gerber Second Food (4 oz)"
    }
  ],
  "name": "Babyfood, apples with ham, strained",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.9,
    "energy_kcal": 259.0,
    "fat_g": 0.9,
    "fibre_g": 1.8,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 120.0,
    "protein_g": 2.6,
    "salt_g": 0.0225,
    "sat_fat_g": 0.25,
    "sodium_mg": 9.0,
    "sugar_g": 7.98,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173517",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
