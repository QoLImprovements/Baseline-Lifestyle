/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "jar-earth-s-best-4-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-167732",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-nfs",
      "kind": "unit",
      "label": "jar NFS"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-heinz-beginner-1-2-5-oz",
      "kind": "unit",
      "label": "jar Heinz Beginner-1 (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-gerber-first-foods-2-5-oz",
      "kind": "unit",
      "label": "jar Gerber First Foods (2.5 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "jar-beech-nut-baby-s-first-2-5-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Baby's First (2.5 oz)"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-i-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage I (4 oz)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, banana no tapioca, strained",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 21.3,
    "energy_kcal": 91.0,
    "fat_g": 0.2,
    "fibre_g": 1.6,
    "folate_ug": 17.0,
    "iron_mg": 0.3,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 290.0,
    "protein_g": 1.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.072,
    "sodium_mg": 2.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.9,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167732",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
