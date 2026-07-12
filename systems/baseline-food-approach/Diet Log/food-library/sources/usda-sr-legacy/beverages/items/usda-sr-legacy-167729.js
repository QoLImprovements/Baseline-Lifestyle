/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle-gerber-second-foods-4-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-gerber-second-foods-4-fl-oz",
      "kind": "unit",
      "label": "bottle Gerber Second Foods (4 fl oz)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-nfs",
      "kind": "unit",
      "label": "bottle NFS"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-beech-nut-stage-2-4-fl-oz",
      "kind": "unit",
      "label": "bottle Beech-Nut Stage 2 (4 fl oz)"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-heinz-strained-4-fl-oz",
      "kind": "unit",
      "label": "bottle Heinz Strained (4 fl oz)"
    }
  ],
  "name": "Babyfood, juice, apple - cherry",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.2,
    "energy_kcal": 197.0,
    "fat_g": 0.1,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.35,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 110.0,
    "protein_g": 0.2,
    "salt_g": 0.01,
    "sat_fat_g": 0.02,
    "sodium_mg": 4.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 32.1,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167729",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
